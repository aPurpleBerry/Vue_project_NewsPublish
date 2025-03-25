const axios = require('axios');
const PexelsModel = require('../../models/PexelsModel');

const PEXELS_API_KEY = '5ECSkdNtiLUqFi5MVsnKCtc90MwLmKT4qH60KKseZLypmq303bN5jTrb'; 

const getList = async ({ page = 1, size = 20, categoryId = 'all', searchText = '' }) => {
  const query = {};
  if (categoryId !== 'all') query.tags = categoryId;
  if (searchText.trim()) query.title = { $regex: searchText, $options: 'i' };

  const pageNum = parseInt(page);
  const sizeNum = parseInt(size);

  const total = await PexelsModel.countDocuments(query);
  const list = await PexelsModel.find(query)
    .skip((pageNum - 1) * sizeNum)
    .limit(sizeNum);

  return {
    list,
    total,
    page: pageNum,
    size: sizeNum
  };
};

const getScaledHeight = (originalWidth, originalHeight, targetWidth = 500) => {
  const ratio = originalHeight / originalWidth;
  return Math.round(targetWidth * ratio);
};

// 定义一个函数，用于将图片信息转换为所需格式
const transformPhoto = (item, keyword) => {
  // 目标宽度为500
  const targetWidth = 500;
  // 获取缩放后的图片高度
  const photoHeight = getScaledHeight(item.width, item.height, targetWidth);

  // 返回转换后的图片信息
  return {
    id: item.id.toString(), // 图片ID
    title: item.alt || `图片来自 Pexels - ${keyword}`, // 图片标题，如果没有alt属性，则使用默认标题
    tags: ['all', keyword], // 图片标签
    photoLink: item.url, // 图片链接
    photo: item.src.medium, // 图片地址
    author: item.photographer, // 图片作者
    authorLike: item.photographer_url, // 图片作者链接
    avatar: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${item.id}`, // 图片作者头像链接
    photoDownLink: item.src.original, // 图片下载链接
    photoWidth: targetWidth, // 图片宽度
    photoHeight: photoHeight, // 图片高度
    photoType: item.src.original.split('.').pop().split('?')[0] // 图片类型
  };
};

const fetchFromPexels = async (keyword = 'cake') => {
  const response = await axios.get('https://api.pexels.com/v1/search', {
    headers: {
      Authorization: PEXELS_API_KEY
    },
    params: {
      query: keyword,
      per_page: 20,
      page: 1
    }
  });

  const list = response.data.photos.map(item => transformPhoto(item, keyword));
  await PexelsModel.insertMany(list);
  return list;
};

// 根据id获取图片详情
const getDetailById = async (id) => {
  const result = await PexelsModel.findOne({ id: id.toString() });
  if (!result) {
    throw new Error('未找到该图片');
  }
  return result;
};


module.exports = {
  getList,
  fetchFromPexels,
  getDetailById
};