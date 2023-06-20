import { Badge } from "~/components/ui/badge";

export function AboutMeSection() {
  return (
    <div
      id="about"
      className="flex flex-col text-center space-y-14 md:flex-row md:space-x-14"
    >
      <div className="w-full md:basis-1/2">
        <h4 className="text-xl uppercase">About me</h4>
        <div className="my-7" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptate
          explicabo quos repudiandae provident similique placeat, adipisci ad
          dolore? Veritatis perferendis expedita iusto odit repellat quam alias,
          ea fuga consectetur! Commodi cumque incidunt itaque!
        </p>
      </div>
      <div className="w-full md:basis-1/2">
        <h4 className="text-xl uppercase">My skills</h4>
        <div className="my-7" />
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Agile",
            "Product Management",
            "Project Management",
            "Stakeholder Management",
            "HTML & CSS",
            "Javascript",
          ].map((skill, i) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
