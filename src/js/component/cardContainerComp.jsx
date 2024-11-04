import React from "react";
import CardComp from "./cardComp";

const CardContainerComp = () => {
    // define card content
    const arrContent = [
        {
            id: 1,
            img: "https://picsum.photos/id/870/200/300",
            title: "Light house",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            img: "https://picsum.photos/id/870/200/300?blur=2",
            title: "Light house blur",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

        },
        {
            id: 3,
            img: "https://picsum.photos/id/870/200/300?grayscale",
            title: "Light house grey",
            text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        },
        {
            id: 4,
            img: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            title: "Light house grey blur",
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        }
    ];

    return (
        <>
            {/* define nav tab */}
            <ul className="nav nav-tabs d-flex justify-content-center mt-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active" id="galery-tab"
                        data-bs-toggle="tab" data-bs-target="#galery-tab-pane" type="button" role="tab" aria-controls="galery-tab-pane" aria-selected="true">
                        galery
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link" id="post-tab"
                        data-bs-toggle="tab" data-bs-target="#post-tab-pane" type="button" role="tab" aria-controls="post-tab-pane" aria-selected="false">
                        Post
                    </button>
                </li>
            </ul>

            {/* nav tab content */}
            <div className="tab-content" id="myTabContent">

                <div className="tab-pane fade show active" id="galery-tab-pane" role="tabpanel" aria-labelledby="galery-tab" tabindex="0">
                    <div className="row m-0 d-flex justify-content-md-between justify-content-sm-center justify-content-center">
                        {arrContent.map(el => <CardComp key={el.id} img={el.img} title={el.title} text={el.text} />)}
                    </div>
                </div>

                <div className="tab-pane fade" id="post-tab-pane" role="tabpanel" aria-labelledby="post-tab" tabindex="0">
                    <div className="d-flex flex-column align-items-center">
                        {arrContent.map(el => <CardComp key={el.id} img={el.img} title={el.title} text={el.text} />)}
                    </div>
                </div>

            </div>
        </>

    );
};

export default CardContainerComp;