let units = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noCursor();
}

function draw() {
  background(17);
  translate(width / 2, height / 2);

  let now = new Date();
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();
  let d = now.getDate();
  let mo = now.getMonth() + 1;
  let y = now.getFullYear();

  units = [
    { label: 'Second', value: s, max: 60, radius: 60, color: '#FF4B3E' },
    { label: 'Minute', value: m, max: 60, radius: 90, color: '#FFB100' },
    { label: 'Hour', value: h, max: 24, radius: 120, color: '#FFD700' },
    { label: 'Day', value: d, max: 31, radius: 150, color: '#ADFF2F' },
    { label: 'Month', value: mo, max: 12, radius: 180, color: '#40E0D0' },
    { label: 'Year', value: y % 100, max: 100, radius: 210, color: '#6495ED' },
    { label: 'Decade', value: Math.floor((y % 100) / 10), max: 10, radius: 240, color: '#8A2BE2' },
    { label: 'Century', value: Math.floor(y / 100), max: 100, radius: 270, color: '#FF69B4' },
  ];

  let hovered = null;

  for (let u of units) {
    let angle = map(u.value, 0, u.max, 0, 360);
    stroke(u.color);
    noFill();
    strokeWeight(10);
    arc(0, 0, u.radius * 2, u.radius * 2, -90, -90 + angle);

    // hover detection
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    if (d > u.radius - 5 && d < u.radius + 5) {
      hovered = u;
    }
  }

  let tooltip = document.getElementById('tooltip');
  if (hovered) {
    tooltip.style.display = 'block';
    tooltip.style.left = `${mouseX + 10}px`;
    tooltip.style.top = `${mouseY + 10}px`;
    tooltip.innerHTML = `${hovered.label}: ${hovered.value}`;
  } else {
    tooltip.style.display = 'none';
  }
}
