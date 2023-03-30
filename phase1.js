const API_URL = 'https://challenge.crossmint.io/api/polyanets';
const CANDIDATE_ID = '46f479dc-0284-4ef6-a40d-283330f8b3f8';

const updatePolyanet = async (row, col, method) => {
  const url = API_URL;
  const data = {
    candidateId: CANDIDATE_ID,
    row,
    col
  };
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    console.log(`Updating polyanet at row ${row} and column ${col}...`);
    const response = await fetch(url, options);
    console.log(response);
  } catch (error) {
    console.error(`Error updating polyanet at row ${row} and column ${col}: ${error}`);
  }
};

const setNewPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const updatePolyanets = async () => {
  const rows = [2, 3, 4, 5, 6, 7, 8];
  for (const row of rows) {
    await setNewPromise(1000);
    await updatePolyanet(row, row, 'POST');
    await setNewPromise(1000);
    await updatePolyanet(row, 10 - row, 'POST');
  }
};

updatePolyanets();
  