function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.protype.die = function() {
	this.dead = true;
}
module.exports = Mouse;