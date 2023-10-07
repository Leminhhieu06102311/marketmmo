import { useState } from 'react';

function MyComponent() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleClick = () => {
    setIsBlurred(true);

    // Thực hiện các hành động khác khi button được click
  };

  return (
    <div className={`bg-gray-200 ${isBlurred ? 'blur' : ''}`}>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Click Me
      </button>
      {/* Các phần tử khác trong giao diện */}
    </div>
  );
}

export default MyComponent;