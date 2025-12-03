import Lottie from "lottie-react";
import faq from "../../assets/images/faq.json";
import Title from "../Title/Title";

const Questions = () => {
  return (
    <div>
      <div className="mt-16">
        <Title title={'Frequently asked questions'}></Title>
      </div>
      
      <div className="flex md:px-6 px-4 justify-around mt-6">
        <div className="w-1/3  hidden md:block">
          <Lottie style={{ height: "350px" }} animationData={faq}></Lottie>
        </div>

        <div className="md:w-1/2 w-full px-3">
          <div>
            <div className="collapse collapse-arrow bg-base-200 my-4">
              <input type="checkbox" name="my-accordion-2" defaultChecked />
              <div className="collapse-title md:text-xl text-sm font-medium">
                Is the site reliable?
              </div>
              <div className="collapse-content">
                <p className="md:text-xl text-sm">Yes.We provide reliable services to our customers</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 my-4">
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title md:text-xl text-sm font-medium">
                Will we get receipt in paper or digital?
              </div>
              <div className="collapse-content">
                <p className="md:text-xl text-sm">We prefer notifying customers using email system</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200  my-4">
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title md:text-xl text-sm font-medium">
                Are there any discounts?
              </div>
              <div className="collapse-content">
                <p className="md:text-xl text-sm">Might be!Make sure to contact our manager for more details</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200  my-4">
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title md:text-xl text-sm font-medium">
                Is this for inside Dhaka only?
              </div>
              <div className="collapse-content">
                <p className="md:text-xl text-sm">We try to provide our service all over the country</p>
              </div>
            </div>

{/* 
            
            <div className="collapse collapse-arrow bg-base-200  my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>Fifth one</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
