import PropTypes from 'prop-types';


const Blogdata = ({blog ,  handleAddToCart}) => {
    const {recipe_name, recipe_img,short_description,calories ,preparing_time, ingredients } = blog;

    return (
        <div className='w-full  gap-5 '>
            <div className=' rounded-2xl    shadow-lg p-5 justify-center w-full border-2 '>                       
                <span className='flex text-center'>
                <img src={recipe_img} alt="" className='rounded-2xl my-2'/>
                </span>
                <h2 className='text-xl font-bold'>   {recipe_name}</h2>
                <h1 className='border-t-2 my-3'></h1>
                <h1 className='text-sm text-gray-600'>{short_description}</h1>
                <h1 className='text-xl font-bold my-1'>Ingredients: 6</h1>
                    {
                         ingredients.map((int, idx) => <li className='ml-6' key={idx}>{int}</li>)

                    }
                    <h1 className='border-t-2 my-3'></h1>
                    <div className='flex justify-between  w-full'>
                        <div className='flex gap-1 w-2/4'>
                            <img src="../../../public/img/Frame.png"/>
                            <h2> {preparing_time}</h2>
                        </div>
                        <div className='flex gap-1 w-2/4'>
                            <img src="../../../public/img/Vector.png"/>
                            <h2 className=''>{calories}</h2>
                        </div>
                    </div>
                    <button onClick={()=> handleAddToCart (blog)} className='border-2 rounded-2xl py-2 px-4 mt-4 bg-[#0BE58A] font-semibold'>Want to Cook</button>
            </div>
        </div>
    );
};

Blogdata.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Blogdata;

