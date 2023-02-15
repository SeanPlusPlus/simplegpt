export const log = (status, color, data) => {
  console.log(`%c ${status}`, `color: ${color}; font-weight:bold;`, data);
}