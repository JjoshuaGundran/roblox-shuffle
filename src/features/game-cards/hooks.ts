export const fetchData = async () => {
  try {
    const response = await fetch('https://apis.roblox.com/explore-api/v1/get-sorts?sessionId={sessionId}&device=computer&country=all');
    return await response.json();
  } catch (err: any) {
    console.log(err);
  }
}