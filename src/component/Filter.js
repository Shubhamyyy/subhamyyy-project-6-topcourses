
function Filter({data,category,setCategory}){

    function changeCategory(title){
        setCategory(title);
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center ">
            {
                data.map( x => (
                    <button onClick={() => changeCategory(x.title)}
                     className={`text-lg px-2 py-1 rounded-md font-medium text-white
                      bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                      bg-opacity-40 border-transparent ${category===x.title? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}
                       key={x.id}>{x.title}</button>
                ))
            }
        </div>
    )
}
export default Filter;