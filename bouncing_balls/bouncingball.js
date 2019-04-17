function bouncingBall (height, bounce, window) {
  if (height > 0 && bounce > 0 && bounce < 1 && window < height) {
    let bounces = 1;
    let newBounce = height * bounce;

    while (newBounce > window) {
      bounces += 2;
      newBounce = newBounce * bounce;
    }
    return bounces;
  } 
  return -1;
}




console.log (bouncingBall (3.0, 0.66, 1.5));
console.log (bouncingBall (30.0, 0.66, 1.5));
