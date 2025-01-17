import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  return (
    <div className="flex gap-2">
      <div className="btn btn-secondary"> Breaking News</div>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
