import "./style.scss";

const SectionContainer = (props) => {
    return (
        <section id="sectionContainer" {...props}>
            {props?.children}
        </section>
    );
};

export default SectionContainer;
