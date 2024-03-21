const SearchIcon = (props) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M21 21L28 28"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            ></path>
            <circle
                cx="13"
                cy="13"
                r="11"
                stroke="white"
                strokeWidth="3"
            ></circle>
        </svg>
    );
};

export default SearchIcon;
