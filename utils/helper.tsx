export const getServices = async () => {
  const response = await fetch(
    "https://api-warung-snt.elcodeee.com/api/warung-snt/v1/services/fv92sxmavl"
  );
  const data = await response.json();

  return data;
};

// export async function serviceData() {
//   const data = await getServices();
//   const services = data.data;
//   return services;
// }

// export async function packageData() {
//   const data = await serviceData();
//   const packages = await data.package;
//   console.log(packages);
//   return packages;
// }

// console.log(await packageData());
