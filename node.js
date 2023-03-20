const node = (value = null, next = null) => {
    return{
        value: value,
        next: next,
    };
};

export default node;