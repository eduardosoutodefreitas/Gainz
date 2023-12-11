const getExercises = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1500";
  const rapidApiKey = process.env.RAPID_API_KEY;
  if (!rapidApiKey) {
    throw new Error("No API key specified");
  }
  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
    next: { revalidate: 43200 },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getExercises;
