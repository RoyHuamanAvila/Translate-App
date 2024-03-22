export const copyToClipBoard = async (text) => {
  await navigator.clipboard.writeText(text);
};
