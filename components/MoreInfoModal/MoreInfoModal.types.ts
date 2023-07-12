export type UseMoreInfoModalState = {
  showId?: number;
  isOpen: boolean;
  open: (showId: number) => void;
  close: () => void;
};

export type MoreInfoModalProps = {
  visible: boolean;
  onClose: () => void;
};
