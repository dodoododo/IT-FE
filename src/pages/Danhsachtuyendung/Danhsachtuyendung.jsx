import { useMemo, useState } from 'react';
import { recruitmentPosts } from '../../data';
import './Danhsachtuyendung.css';

function Danhsachtuyendung() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('Tat ca');

  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(recruitmentPosts.map((post) => post.location)));
    return ['Tat ca', ...uniqueLocations];
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return recruitmentPosts.filter((post) => {
      const matchTitle = post.title.toLowerCase().includes(normalizedKeyword);
      const matchLocation = location === 'Tat ca' || post.location === location;
      return matchTitle && matchLocation;
    });
  }, [keyword, location]);

  return (
    <section className="recruitment-page">
      <div className="recruitment-shell">
        <header className="recruitment-header">
          <p className="recruitment-kicker">He thong tuyen dung</p>
          <h1 className="recruitment-title">Danh sach thong tin tuyen dung</h1>

          <div className="recruitment-toolbar">
            <div className="recruitment-search-wrap">
              <span className="recruitment-icon">search</span>
              <input
                className="recruitment-search"
                type="text"
                placeholder="Tim kiem cong viec"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
            </div>

            <div className="recruitment-select-wrap">
              <span className="recruitment-icon">location_on</span>
              <select
                className="recruitment-location-filter"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                {locations.map((locationOption) => (
                  <option key={locationOption} value={locationOption}>
                    {locationOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="recruitment-table-head">
          <span>#</span>
          <span>Ten cong viec</span>
          <span>So vi tri</span>
          <span>Dia diem</span>
          <span>Thao tac</span>
        </div>

        <div className="recruitment-list">
          {filteredPosts.length === 0 ? (
            <p className="recruitment-empty-state">Khong co tin tuyen dung phu hop.</p>
          ) : (
            filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`recruitment-row ${index % 2 === 0 ? 'is-light' : 'is-low'}`}
              >
                <span className="recruitment-index">{index + 1}</span>
                <div className="recruitment-role">
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                </div>
                <span className="recruitment-openings">{post.openings}</span>
                <div className="recruitment-location">
                  <span>{post.location}</span>
                </div>
                <button className="recruitment-apply-btn" type="button">
                  Ung tuyen
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Danhsachtuyendung;
