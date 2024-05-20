import { Bars } from "react-loader-spinner"

const Loading = () => {
    return (
        <section className="bg-[rgba(255,255,255,1)] flex justify-center items-center fixed top-0 left-0 w-screen h-screen">
            <div>
                <Bars
                    height="80"
                    width="80"
                    color="#41B06E"
                    visible={true}
                />
            </div>
        </section>
    )
}

export default Loading
