type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}


const Pagination = ({totalPages, currentPage, onPageChange}: PaginationProps) => {
    if (totalPages <= 1) {
        return null;
    }
    return ( 
        <>
        <div className="flex justify-center gap-2 mt-4 lg:mb-[-3rem] sm:mt-6 lg:mt-6 sm:pb-16 overflow-visible">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    className={`px-3 py-1 cursor-pointer rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
        </>
    );
}

export default Pagination;