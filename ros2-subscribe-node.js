const ROS2Bridge = require("./ros2-bridge");

module.exports = function (RED) {
  return function (config) {
    RED.nodes.createNode(this, config);
    var node = this;
    ROS2Bridge.node.createSubscription(
      "std_msgs/msg/String",
      "topic",
      (msg) => {
				node.send({payload: msg.data});
      }
		);
  };
};
