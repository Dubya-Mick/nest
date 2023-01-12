import { Chip } from '@mui/material';

type ColorsProps = {
  handleAddBgColor: (color: string) => void;
  handleRemoveBgColor: (color: string) => void;
  backgroundColors: string[];
};

export const Colors: React.FC<ColorsProps> = ({
  handleAddBgColor,
  handleRemoveBgColor,
  backgroundColors,
}) => {
  const bgChips = backgroundColors.map((color) => {
    return (
      <Chip
        sx={{ backgroundColor: color, minWidth: null }}
        onDelete={() => handleRemoveBgColor(color)}
      />
    );
  });

  const handleColorChange = (e: any) => {
    handleAddBgColor(e.target.value);
  };

  const currentColor = backgroundColors.length
    ? backgroundColors[backgroundColors.length - 1]
    : '#ffffff';

  return (
    <div>
      <p>Background Colors</p>
      <div
        style={{
          display: 'flex',
          maxWidth: '10rem',
          flexWrap: 'wrap',
          maxHeight: '6rem',
          overflow: 'scroll',
        }}
      >
        {bgChips}
      </div>
      <input type="color" onInput={handleColorChange} value={currentColor} />
      <p>Shadow Colors</p>
      <input type="color" />
    </div>
  );
};
