module.exports = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log('ERROR:', error);
    ctx.status = error.status || 500;
    ctx.body = {
      code: error.errno || error.status || 500,
      message: error.status ? error.message : 'Internal Server Error',
    }
  } 
};