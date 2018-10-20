const RotateFingers = (entities, { touches }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.
  touches
    .filter(touch => {
      return touch.type === 'move';
    })
    .forEach(touch => {
      let finger = entities[touch.id];
      if (finger && finger.position) {
        finger.position = [
          finger.position[0] + touch.delta.pageX,
          finger.position[1] + touch.delta.pageY
        ];
      }
    });

  return entities;
};

export { RotateFingers };
