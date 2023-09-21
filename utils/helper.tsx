export const getServices = async () => {
  const response = await fetch(
    "https://api-warung-snt.elcodeee.com/api/warung-snt/v1/services/fv92sxmavl"
  );
  const data = await response.json();

  return data;
};

export const getOptionform = async () => {
  const response = await fetch(
    "https://api-warung-snt.elcodeee.com/api/warung-snt/v1/services-option/fv92sxmavl"
  );
  const data = await response.json();
  return data;
};
