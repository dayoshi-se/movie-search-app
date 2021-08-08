const Results = (props) => {
    return (
        <div>
        <p>Sharing a few of our favorite movies</p>
            <div className = "resultbox">
            {props.resultMovie && props.resultMovie.map((singleData,index) =>
                <div key={index} className="movies">
                    <div>
                        <p class="title">{singleData.title}</p>
                        <img src={'https://image.tmdb.org/t/p/w154' + singleData.poster_path }/>
                        <p>({singleData.release_date && singleData.release_date.slice(0,4)})</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};
export default Results;