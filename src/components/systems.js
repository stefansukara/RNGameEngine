const RotateSquare = (entities, { touches }) => {
  touches
    .filter(touch => {
      return touch.type === 'move' && touch.event.touches.length === 1;
    })
    .forEach(touch => {
      let square = entities[touch.id];
      // const touchX = touch.event.locationX;
      const touchY = touch.event.pageY;
      console.log('touchY', touchY);
      const moveX = touch.delta.pageX;
      if (moveX > 0) square.degree += 2;
      if (moveX < 0) square.degree -= 2;
      // if (moveX > 0 && touchY <= 120 && touchY > 0) square.degree += 2;
      // if (moveX < 0 && touchY > 120 && touchY < 240) square.degree -= 2;
    });

  return entities;
};

export { RotateSquare };
