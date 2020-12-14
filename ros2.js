module.exports = function (RED) {
  var Ros2SubscribeNode = require("./ros2-subscribe-node")(RED);
  var Ros2PublishNode = require("./ros2-publish-node")(RED);

  RED.nodes.registerType("ros2-subscribe", Ros2SubscribeNode);
  RED.nodes.registerType("ros2-publish", Ros2PublishNode);
};
