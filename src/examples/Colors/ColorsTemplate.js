const ColorBubble = ({colorClass})=>{
    const size= 50;
    return (
        <div className={`${colorClass}`} style={{width: size, height: size}}>
        </div>
    )
}


const ColorsTemplate = ({isDark}) => {

    return <div>
         <div className={`p-4 space-y-1 ${isDark?'bg-black':''}`}>
            <div className='flex'>
              <ColorBubble colorClass='bg-gray-50'/>
              <ColorBubble colorClass='bg-gray-100'/>
              <ColorBubble colorClass='bg-gray-200'/>
              <ColorBubble colorClass='bg-gray-300'/>
              <ColorBubble colorClass='bg-gray-400'/>
              <ColorBubble colorClass='bg-gray-500'/>
              <ColorBubble colorClass='bg-gray-600'/>
              <ColorBubble colorClass='bg-gray-700'/>
              <ColorBubble colorClass='bg-gray-800'/>
              <ColorBubble colorClass='bg-gray-900'/>
              <ColorBubble colorClass='bg-gray-950'/>
              <ColorBubble colorClass='bg-gray-1000'/>
            </div>
            <div className='flex'>
              <ColorBubble colorClass='bg-mauve-50'/>
              <ColorBubble colorClass='bg-mauve-100'/>
              <ColorBubble colorClass='bg-mauve-200'/>
              <ColorBubble colorClass='bg-mauve-300'/>
              <ColorBubble colorClass='bg-mauve-400'/>
              <ColorBubble colorClass='bg-mauve-500'/>
              <ColorBubble colorClass='bg-mauve-600'/>
              <ColorBubble colorClass='bg-mauve-700'/>
              <ColorBubble colorClass='bg-mauve-800'/>
              <ColorBubble colorClass='bg-mauve-900'/>
              <ColorBubble colorClass='bg-mauve-950'/>
              <ColorBubble colorClass='bg-mauve-1000'/>
            </div>
          </div>
    </div>

}

export default ColorsTemplate