const _chooseMethod = {
    add: true // in case false, it will delete all the data
};

const chooseMethod = _chooseMethod.add;

const _candidateId = '46f479dc-0284-4ef6-a40d-283330f8b3f8';

async function getRequest() {
    const response = await fetch('https://challenge.crossmint.io/api/map/' + _candidateId + '/goal',
    {
        method: 'GET'
    });
    return response.json();
}

async function postRequest(type, _data) {
    method = chooseMethod ? 'POST' : 'DELETE';
    _data.candidateId = _candidateId;
    const response = await fetch('https://challenge.crossmint.io/api/' + type, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_data)
    });

    if (!response.ok) {
        throw new Error(`Failed to ${method} ${type}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}


setTimeout(async () => {
    const goalResult = await getRequest();
    for (let i = 0; i < goalResult.goal.length; i++) {
        for (let index = 0; index < goalResult.goal[i].length; index++) {
            const content = goalResult.goal[i][index];
            const _direction = content.indexOf('RIGHT') > -1 ? 'right' : content.indexOf('LEFT') > -1 ? 'left' : content.indexOf('UP_COMETH') > -1 ? 'up' : 'down';
            switch (content) {
                case 'UP_COMETH':
                    console.log('UP_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'DOWN_COMETH':
                    console.log('DOWN_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'RIGHT_COMETH':
                    console.log('RIGHT_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'LEFT_COMETH':
                    console.log('LEFT_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'SPACE':
                    null;
                    break;
                case 'POLYANET':
                    console.log('POLYANET...', i, ' : ', index);
                    await postRequest('polyanets', { 'row': i, 'column': index });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'WHITE_SOLOON':
                    console.log('WHITE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'white' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'BLUE_SOLOON':
                    console.log('BLUE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'blue' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'RED_SOLOON':
                    console.log('RED_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'red' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'PURPLE_SOLOON':
                    console.log('PURPLE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'purple' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
            }
        }
    }
}, 50);
