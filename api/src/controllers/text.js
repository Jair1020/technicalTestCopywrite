const reverseText = (req, res, next) => {
  try {
    const { text } = req.query;
    const reversedText = text.split('').reverse().join('');
    if (text === reversedText) {
      res.status(200).json({
        status: 'success',
        message: 'Text is a palindrome',
        data: {
          text,
          reversedText,
          palindrome: true
        }
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Text is not a palindrome',
        data: {
          text,
          reversedText,
          palindrome: false
        }
      });
    }
  } catch (err) {
    next(err);
  }
}


module.exports = reverseText;