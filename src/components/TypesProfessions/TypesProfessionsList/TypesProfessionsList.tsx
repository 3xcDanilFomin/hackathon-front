import { TypesProfessionsItem } from "../TypesProfessionsItem/TypesProfessionsItem";
import styles from "./TypesProfessionsList.module.scss";

interface IProfession {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}

const professions: IProfession[] = [
  {
    id: 1,
    title: 'Тип "человек-знаковая система"',
    imgPath: "/1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos architecto minus voluptates maiores tempora doloremque in voluptatum, esse impedit corporis iste nihil provident enim reprehenderit quis, error facere sint.Quis asperiores minus quo autem ipsum? Sapiente maiores reiciendis possimus at magni quam, veniam corrupti dignissimos repellat modi dolorum autem sit rerum voluptate eum inventore vitae unde ea, impedit minus!Soluta aperiam repellendus fugiat quibusdam rem saepe amet sequi nostrum magnam laudantium earum quod sint libero doloribus tempore dolore et nisi modi, minus nemo accusamus aut fuga ea! Non, fugiat.At eaque explicabo dicta impedit nisi iusto omnis expedita, corporis dolores ipsum nesciunt dolore beatae provident autem! Architecto recusandae, tenetur iure, voluptatem officiis neque consequuntur in voluptate quos amet iste? Accusantium voluptatibus suscipit autem beatae animi aut dicta cum debitis, cumque vel consequuntur, vitae non! Molestias soluta molestiae ullam eligendi modi consequatur a labore culpa, quos fugiat error, similique saepe!",
  },
  {
    id: 2,
    title: 'Тип "человек-художественный образ"',
    imgPath: "/2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos architecto minus voluptates maiores tempora doloremque in voluptatum, esse impedit corporis iste nihil provident enim reprehenderit quis, error facere sint.Quis asperiores minus quo autem ipsum? Sapiente maiores reiciendis possimus at magni quam, veniam corrupti dignissimos repellat modi dolorum autem sit rerum voluptate eum inventore vitae unde ea, impedit minus!Soluta aperiam repellendus fugiat quibusdam rem saepe amet sequi nostrum magnam laudantium earum quod sint libero doloribus tempore dolore et nisi modi, minus nemo accusamus aut fuga ea! Non, fugiat.At eaque explicabo dicta impedit nisi iusto omnis expedita, corporis dolores ipsum nesciunt dolore beatae provident autem! Architecto recusandae, tenetur iure, voluptatem officiis neque consequuntur in voluptate quos amet iste? Accusantium voluptatibus suscipit autem beatae animi aut dicta cum debitis, cumque vel consequuntur, vitae non! Molestias soluta molestiae ullam eligendi modi consequatur a labore culpa, quos fugiat error, similique saepe!",
  },
  {
    id: 3,
    title: 'Тип "человек-человек"',
    imgPath: "/3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos architecto minus voluptates maiores tempora doloremque in voluptatum, esse impedit corporis iste nihil provident enim reprehenderit quis, error facere sint.Quis asperiores minus quo autem ipsum? Sapiente maiores reiciendis possimus at magni quam, veniam corrupti dignissimos repellat modi dolorum autem sit rerum voluptate eum inventore vitae unde ea, impedit minus!Soluta aperiam repellendus fugiat quibusdam rem saepe amet sequi nostrum magnam laudantium earum quod sint libero doloribus tempore dolore et nisi modi, minus nemo accusamus aut fuga ea! Non, fugiat.At eaque explicabo dicta impedit nisi iusto omnis expedita, corporis dolores ipsum nesciunt dolore beatae provident autem! Architecto recusandae, tenetur iure, voluptatem officiis neque consequuntur in voluptate quos amet iste? Accusantium voluptatibus suscipit autem beatae animi aut dicta cum debitis, cumque vel consequuntur, vitae non! Molestias soluta molestiae ullam eligendi modi consequatur a labore culpa, quos fugiat error, similique saepe!",
  },
  {
    id: 4,
    title: 'Тип "человек-техника"',
    imgPath: "/4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos architecto minus voluptates maiores tempora doloremque in voluptatum, esse impedit corporis iste nihil provident enim reprehenderit quis, error facere sint.Quis asperiores minus quo autem ipsum? Sapiente maiores reiciendis possimus at magni quam, veniam corrupti dignissimos repellat modi dolorum autem sit rerum voluptate eum inventore vitae unde ea, impedit minus!Soluta aperiam repellendus fugiat quibusdam rem saepe amet sequi nostrum magnam laudantium earum quod sint libero doloribus tempore dolore et nisi modi, minus nemo accusamus aut fuga ea! Non, fugiat.At eaque explicabo dicta impedit nisi iusto omnis expedita, corporis dolores ipsum nesciunt dolore beatae provident autem! Architecto recusandae, tenetur iure, voluptatem officiis neque consequuntur in voluptate quos amet iste? Accusantium voluptatibus suscipit autem beatae animi aut dicta cum debitis, cumque vel consequuntur, vitae non! Molestias soluta molestiae ullam eligendi modi consequatur a labore culpa, quos fugiat error, similique saepe!",
  },
  {
    id: 5,
    title: 'Тип "человек-природа"',
    imgPath: "/5.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos architecto minus voluptates maiores tempora doloremque in voluptatum, esse impedit corporis iste nihil provident enim reprehenderit quis, error facere sint.Quis asperiores minus quo autem ipsum? Sapiente maiores reiciendis possimus at magni quam, veniam corrupti dignissimos repellat modi dolorum autem sit rerum voluptate eum inventore vitae unde ea, impedit minus!Soluta aperiam repellendus fugiat quibusdam rem saepe amet sequi nostrum magnam laudantium earum quod sint libero doloribus tempore dolore et nisi modi, minus nemo accusamus aut fuga ea! Non, fugiat.At eaque explicabo dicta impedit nisi iusto omnis expedita, corporis dolores ipsum nesciunt dolore beatae provident autem! Architecto recusandae, tenetur iure, voluptatem officiis neque consequuntur in voluptate quos amet iste? Accusantium voluptatibus suscipit autem beatae animi aut dicta cum debitis, cumque vel consequuntur, vitae non! Molestias soluta molestiae ullam eligendi modi consequatur a labore culpa, quos fugiat error, similique saepe!",
  },
];

export const TypesProfessionsList: React.FC = () => {
  return (
    <ul className={styles["list"]}>
      {professions.map((profession) => (
        <TypesProfessionsItem
          key={profession.id}
          imgPath={profession.imgPath}
          title={profession.title}
          description={profession.description}
        />
      ))}
    </ul>
  );
};
