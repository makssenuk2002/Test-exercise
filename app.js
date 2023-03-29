const canvas = document.getElementById('canvas');
const popup = document.getElementById('popup');
const ctx = canvas.getContext('2d');
const objects = [];
const NUM_OBJECTS = 100000;
const UPDATE_INTERVAL = 500;
const UPDATE_COUNT = 2000;

// Create objects
for (let i = 0; i < NUM_OBJECTS; i++) {
  objects.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: 'rgba(0, 0, 0, 1)',
    size: 10
  });
}

// Render function
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x - obj.size / 2, obj.y - obj.size / 2, obj.size, obj.size);
  }
}

// Generate color update events
function generateColorUpdateEvents() {
  for (let i = 0; i < UPDATE_COUNT; i++) {
    const obj = objects[Math.floor(Math.random() * NUM_OBJECTS)];
    obj.color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
  }
}

// Select object
function selectObject(x, y) {
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    const dx = obj.x - x;
    const dy = obj.y - y;
    if (dx * dx + dy * dy < obj.size * obj.size / 4) {
      obj.selected = true;
      popup.innerHTML = `Color: ${obj.color}`;
      popup.style.display = 'block';
      popup.style.left = x + 'px';
      popup.style.top = y + 'px';
    } else {
      obj.selected = false;
    }
  }
}
