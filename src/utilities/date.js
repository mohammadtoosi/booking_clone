const renderDays = () => {
    let days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(
            <option value={i} key={i}>
                {i}
            </option>
        );
    }
    return days;
};

const renderMonths = () => {
    let months = [];
    for (let i = 1; i <= 12; i++) {
        months.push(
            <option value={i} key={i}>
                {i}
            </option>
        );
    }
    return months;
};

const renderYears = () => {
    let years = [];
    for (let i = 1300; i <= 1400; i++) {
        years.push(
            <option selected={`${i === 1380 ? "selected" : ""}`} value={i} key={i}>
                {i}
            </option>
        );
    }
    return years;
};

export { renderDays, renderMonths, renderYears };
