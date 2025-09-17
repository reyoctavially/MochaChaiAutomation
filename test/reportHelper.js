// reportHelper.js
function attachResponse(test, res, label = "API Response") {
  test.context = {
    title: label,
    value: JSON.stringify(
      {
        status: res.status,
        data: res.data
      },
      null,
      2
    )
  };
}

module.exports = { attachResponse };
