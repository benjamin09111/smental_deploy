

const Loading = ({msg}) => {
    return (
        <div className='bg_overlay flex justify-center items-center flex-col gap-3'>
            <div>
                <p>LOGO</p>
            </div>
            <p className='text-2xl text-center'>{msg}...</p>
            <span class="icon-[eos-icons--loading] text-4xl text-white bg-white"></span>
        </div>
    )
}

export default Loading