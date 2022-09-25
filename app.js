document.addEventListener("mousemove", (e) => {
  //   console.log(e);
  const MX = e.clientX;
  const MY = e.clientY;
  const rick = document.getElementById("rick");
  const bBox = rick.getBoundingClientRect(); // basically a box around rick wali img
  const rickX = bBox.left + bBox.width / 2;
  const ricky = bBox.top + bBox.height / 2;
  //   center mil gayaaaaaaaaaaaa``
  // for head
  const head = document.getElementById("head");
  const bbhead = head.getBoundingClientRect();
  const headX = bbhead.left + bbhead.width / 2;
  const heady = bbhead.top + bbhead.height / 2;

  const angleRick = angle(MX, MY, rickX, ricky);
  const angleHead = angle(MX, MY, headX, heady);
  //   console.log(angleDeg);

  //   now move da eyes
  const aakiya = document.querySelectorAll(".eye");
  aakiya.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleRick}deg)`;
    rick.style.filter = ` hue-rotate(${angleRick / 2}deg)`;
  });
  head.style.transform = `rotate(${180 + angleHead}deg)`;
});

function angle(cx, cy, ex, ey) {
  const normalisedX = ex - cx;
  const normalisedY = ey - cy;
  const rad = Math.atan2(normalisedY, normalisedX); //gives us angle (normalised cus yeh assume karta hai 0,0 )
  const deg = (rad * 180) / Math.PI;
  return deg;
}
