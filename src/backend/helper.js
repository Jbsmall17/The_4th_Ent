// 

function playlistFormat(record) {
    return {
      "id": record.id,
      "url": record.fields['url'],
      "owner": record.fields['owner']
    }
  }

function subscribersFormat(record){
    return record.fields['email'] 
}
function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
}

function eventFormat(record){
    const formattedDate = formatDate(record.fields['date'])
    return {
        "id" : record.id,
        "name" : record.fields['name'],
        "description" : record.fields['description'],
        "date" : formattedDate,
        "url" : record.fields['url']
    }
}

function blogFormat(record){
    const formattedDate = formatDate(record.fields['date'])
    return{
        "id" : record.id,
        "title" : record.fields['title'],
        "description" : record.fields['description'],
        "date" : formatDate,
        "url" : record.fields['url']
    }
}

export {
    playlistFormat,
    formatDate,
    eventFormat,
    blogFormat,
    subscribersFormat
}