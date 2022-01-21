const parseDate = (createdAt) => {
    let createdTime = new Date(createdAt);

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = createdTime.getFullYear();
    const month = months[createdTime.getMonth()];
    const date = createdTime.getDate();
    const parsed = `${month} ${date} ${year}` ;
    return parsed
};

export default parseDate;