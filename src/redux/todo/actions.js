export const INIT = "INIT";
export const TOGGLE = "TOGGLE";

export const toggle = () => ({
  type: TOGGLE,
});
export const init = (value) => ({
  type: INIT,
  payload: {
    value
  }
});