const ROS2Bridge = require("./ros2-bridge");

module.exports = function(RED) {
	return function (config) {
		
		RED.nodes.createNode(this, config);
		var node = this;
		node.pub = ROS2Bridge.node.createPublisher('std_msgs/msg/String', 'topic');
		node.on("input", function (msg) {
			node.pub.publish({ data: msg.payload });
		});
	}
}
