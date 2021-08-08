

const Search = (props) => {

    return (
        <form>
            <input type="text" name="movie" placeholder="検索したい映画名" onChange={e => props.setMovie(e.target.value)}/>
            <button type="submit" onClick={props.getMovie}>SEARCH</button>
        </form>
    );
}
export default Search;