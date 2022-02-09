const findBy = (singleCondition) => singleCondition? {
    "$regex": `${singleCondition}`,
    "$options": "i"
} : /.*/;
    
module.exports = {
    findBy
}