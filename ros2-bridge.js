const rclnodejs = require("rclnodejs");

class ROS2bridge {
  constructor() {
		this.init();
  }

  async init() {
    await rclnodejs.init();
    this.ros_node = rclnodejs.createNode("node_red_bridge");
    rclnodejs.spin(this.ros_node);
  }
	
  get node() {
    return this.ros_node;
  }
}

module.exports = new ROS2bridge();
