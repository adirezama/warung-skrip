export const getServices = async () => {
  const response = await fetch(
    `${process.env.ENDPOINT}${process.env.GET_SERVICES}${process.env.KEY}`,
    { cache: "no-cache" }
  );
  const data = await response.json();

  return data;
};

export const getOptionform = async () => {
  const response = await fetch(`${process.env.GET_OPTION_ENDPOINT}`);
  const data = await response.json();
  return data;
};
