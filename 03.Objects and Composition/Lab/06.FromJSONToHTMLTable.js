function fromJSONToHTMLTable(text) {
    const array = JSON.parse(text);
    const keys = Object.keys(array[0]);

    let result = '';

    result += '<table>' + '\n';
    result += '<tr>';
    for (let key of keys) {
        result += `<th>${escapeHtml(key)}</th>`;
    }
    result += '</tr>' + '\n';

    for (let obj of array) {
        result += '<tr>';
        for (let prop in obj) {
            result += `<td>${escapeHtml(obj[prop])}</td>`;
        }
        result += '</tr>' + '\n';
    }
    result += '</table>';

    console.log(result);

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);