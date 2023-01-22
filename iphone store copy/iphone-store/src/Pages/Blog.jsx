import Blogs from '../Components/Blogs'
import blogs from "../blogs"

export default function Blog() {
    return (
        <div>
            <h2 className="text-center text-white h1">Blog Page</h2>

            <div>
                {
                    blogs.map((val) => {
                        return <Blogs blogs={val} />
                    })
                }
            </div>

        </div>
    )
}