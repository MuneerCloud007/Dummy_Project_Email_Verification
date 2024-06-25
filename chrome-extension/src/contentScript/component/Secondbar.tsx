import FolderIcon from '@mui/icons-material/Folder';
import LabelIcon from '@mui/icons-material/Label';
export function Secondbar() {
    return (
        <div className="flex justify-between px-4 items-center my-3">
            <div>
                <p className="text-2xl font-semibold">Add to:</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div className="first-btn p-2 rounded-full flex gap-6 items-center bg-slate-50 border-1 border-gray-300 cursor-pointer  hover:bg-gray-300">
                    <span className=' text-xl pl-1 font-semibold '>FirstFolder</span> 
                        <FolderIcon
                        sx={{ fontSize: 18 }}
                        />
                </div>
                <div className="second-btn p-2  rounded-full flex gap-4 items-center bg-slate-50 border-1 border-gray-300 cursor-pointer  hover:bg-gray-300">
                    <span className=' text-xl  pl-1 font-semibold'>Tag</span>
                    <LabelIcon
                    sx={{ fontSize: 18 }}
                    />

                </div>
            </div>
        </div>
    )

}