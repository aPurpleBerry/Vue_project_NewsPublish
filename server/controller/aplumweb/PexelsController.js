const PexelsService = require('../../service/aplumweb/PexelsService');

const getList = async (req, res) => {
  try {
    const result = await PexelsService.getList(req.query);
    res.send({
      success: true,
      code: 200,
      data: result,
      message: 'success'
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      code: 500,
      message: '服务器错误',
      error: error.message
    });
  }
};

const fetchFromPexels = async (req, res) => {
  try {
    const result = await PexelsService.fetchFromPexels(req.query.query || 'cupcake');
    res.send({
      success: true,
      code: 200,
      data: result,
      message: '抓取并入库成功'
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      code: 500,
      message: '抓取失败',
      error: error.message
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PexelsService.getDetailById(id);
    res.send({
      success: true,
      code: 200,
      data: result,
      message: 'success'
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      code: 404,
      message: error.message
    });
  }
};

module.exports = {
  getList,
  fetchFromPexels,
  getDetail
};