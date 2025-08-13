import { teamData } from "../../../data/pageData/teamData";
import { CommonHero } from "../../shareComponents/CommonHero";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";


const Team = () => {
  return (
    <>
      <CommonHero title="Our Team" description="Team" />
      <section className="bg-white py-36">
        <div className="container mx-auto">
          {/* Upper Text Part */}
          <div className="md: lg:pb-[50px]">
            <h2 className="text-[60px] font-normal text-center">
              {teamData.heading.before}
              <span className="text-pink"> {teamData.heading.highlight} </span>
              {teamData.heading.after}
            </h2>
            <p className="text-pColor font-normal text-base md:text-xl pt-3 text-center">
              {teamData.paragraph}
            </p>
          </div>
          {/* Team Image's */}
          <div className="flex flex-col lg:flex-row gap-7 lg:flex-wrap justify-center items-center">
            {teamData.Columns.map((member) => {
              const icon = {
                facebook: Facebook,
                instagram: Instagram,
                youtube: Youtube,
              };
              return (
                <div className="p-3" key={member.id}>
                  <img src={member.image} alt="Member Image" />
                  <h5 className="text-regularColor font-bold text-xl text-center pt:5 md:pt-8 pb-1 md:pb-2">
                    {member.name}
                  </h5>
                  <p className="text-pColor font-normal text-base text-center pt-2 md:pt-4 pb-2 md:pb-4">
                    {member.title}
                  </p>
                  <div className="flex gap-2 justify-center items-center ">
                    {member.icons.map((iconName, Index) => {
                      const IconComponent = icon[iconName];
                      const link = member.links?.[iconName]
                      return IconComponent && link ? (<a href={link} target="_blank" rel="noopener noreferrer" key={Index} className="text-white bg-pink w-[45px] h-[45px] rounded-full flex items-center justify-center"><IconComponent/></a>) : null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
